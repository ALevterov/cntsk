import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './Footer.module.css'
import global from '@/styles/global.module.css'
import MapItem from '@/components/ui/Sections/Footer/MapItem/MapItem'
import LocationIcon from '@/icons/LocationIcon'
import MailIcon from '@/icons/MailIcon'
import PhoneIcon from '@/icons/PhoneIcon'
import { ICoords } from '@/components/ui/Sections/Footer/Map/Map'

const coords1: ICoords = { lat: 55.704098, lng: 37.614599 }
const coords2: ICoords = { lat: -26.120688, lng: 28.012848 }
const coords3: ICoords = { lat: 44.800028, lng: 20.333483 }

const Footer = () => {
  return (
    <div className={styles.section} id='footer'>
      <div className={global.container}>
        <BlackTitle color='white'>офисы</BlackTitle>
        <div className={styles.cardsContainer}>
          <MapItem title='Россия' id='map1' coords={coords1}>
            <>
              <div>
                <LocationIcon />
                <p>115191, Москва, Духовской пер., 17, стр.10</p>
              </div>
              <div>
                <MailIcon />
                <p>info@strategycom.info</p>
              </div>
              <div>
                <PhoneIcon />
                <p>
                  +7 (925) 517-04-18 <br /> +7 (985) 225-68-54
                </p>
              </div>
            </>
          </MapItem>
          <MapItem title='Африка / ЮАР' id='map2' coords={coords2}>
            <>
              <div>
                <LocationIcon />
                <p>4th Susman Avenue, Blairgowrie, 2091, Johannesburg</p>
              </div>
              <div>
                <MailIcon />
                <p>savious.kwinika@cajnewsafrica.com</p>
              </div>
              <div>
                <PhoneIcon />
                <p>
                  011 039 2191, <br /> 072 126 2434,
                </p>
              </div>
            </>
          </MapItem>
          <MapItem
            title='Центральная и Восточная Европа'
            id='map3'
            coords={coords3}
          >
            <>
              <div>
                <LocationIcon />
                <p>Milutina Milankovića 1, 11070 Belgrade</p>
              </div>
              <div>
                <PhoneIcon />
                <p>+381 64 5771762</p>
              </div>
            </>
          </MapItem>
        </div>
      </div>
    </div>
  )
}

export default Footer
