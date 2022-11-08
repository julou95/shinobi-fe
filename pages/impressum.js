import styles from '@/styles/Impressum.module.scss'
import { useRouter } from 'next/router'

export default function Impressum({ data }) {
  const router = useRouter()

  return (
    <div className={styles.impressumWrapper}>
      <div className={styles.header}>
        <img src="/shinobi-logo.png" onClick={() => router.push('/')} />
      </div>
      <h1><span>Impressum</span></h1>
      <p className={styles.impressumText}>
        Kontakt-Adresse<br />
        Shinobi-Tattoo<br />
        Alain Heutschi<br />
        Seftigenstrasse 83<br />
        3007 Bern<br />
        Schweiz<br /><br />
        E-Mail:
        info@shinobi-tattoo.ch<br /><br />

        Vertretungsberechtigte Person<br />
        Alain Heutschi, Inhaber<br /><br />

        Handelsregister-Eintrag<br />
        Eingetragener Firmenname: Shinobi-Tattoo<br />
        Handelsregister Nr: CHE-432.738.402<br /><br />

        Haftungsausschluss<br />
        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br />
        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br />
        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br /><br />

        Haftungsausschluss für Links<br />
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.<br /><br />

        Urheberrechte<br />
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Alain Heutschi oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
      </p>
    </div>
  )
}