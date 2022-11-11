import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import TrainIcon from '@mui/icons-material/Train';
import BusIcon from '@mui/icons-material/DirectionsBus';

import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton
} from "@mui/material";

import styles from '../styles/Home.module.css'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad',
    title: 'Flights',
    link: "/avia",
    icon: <FlightTakeoffIcon />,
  },
  {
    img: 'https://images.unsplash.com/photo-1514970746-d4a465d514d0',
    title: 'Trains',
    link: "/",
    icon: <TrainIcon />,
  },
  {
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    title: 'Buses',
    link: "/",
    icon: <BusIcon />,
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <Stack>
        <ImageList 
          sx={{
            width: 750,
            height: 250
          }}
          cols={3}
          rowHeight={250}
          variant="woven"
          gap={18}
        >
          {
            itemData.map(item => (
              <ImageListItem key={item.img}>
                <Link href={item.link}>
                  <Image
                    fill
                    src={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2`}
                    alt={item.title}
                  />
                </Link>
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <Link href={item.link}>
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`buy ${item.title}`}
                      >
                        {item.icon}
                      </IconButton>
                    </Link>
                    
                  }
                />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Stack>
    </div>
  )
}
