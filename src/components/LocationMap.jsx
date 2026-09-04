import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useLanguage } from '../context/LanguageContext.jsx'
import './LocationMap.css'

// Vite bundles Leaflet's marker images under a hashed URL; without this fix
// the default marker icon is broken (a well-known Leaflet + bundler issue).
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// TODO: replace with CF2M's exact coordinates if this approximate position
// (central Saint-Gilles, Brussels) isn't precise enough for you.
const CF2M_POSITION = [50.8265, 4.3459]

export default function LocationMap() {
  const { t } = useLanguage()
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const map = L.map(containerRef.current, {
      center: CF2M_POSITION,
      zoom: 15,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    markerRef.current = L.marker(CF2M_POSITION).addTo(map)

    mapRef.current = map

    // Leaflet mis-renders tiles when its container size isn't settled at init
    // time (e.g. loaded scrolled down); force a resize check once it's visible.
    const resizeObserver = new ResizeObserver(() => map.invalidateSize())
    resizeObserver.observe(containerRef.current)

    let observer
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) map.invalidateSize()
      })
      observer.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      observer?.disconnect()
      map.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!markerRef.current) return
    markerRef.current.bindPopup(t('education.locationNote')).openPopup()
  }, [t])

  return <div ref={containerRef} className="location-map" />
}
