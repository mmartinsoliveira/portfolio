import { styled } from '../../stitches.config'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useKBar } from 'kbar'

const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '12px',
    minHeight: '60px',
    width: '100%',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '0',
    zIndex: 3,
    marginTop: '12px',
    '@bp2': { marginTop: '0' },
})

const ButtonHeader = styled('div', {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    borderRadius: '$borderRadius',
    color: 'white',
    cursor: 'pointer',
    height: '34px',
    padding: '0 10px',
    transition: 'background $duration ease-in-out',
    '&:hover': { background: '$hover' },
  })

const ButtonLogo = styled(ButtonHeader, {
    fontWeight: 700,
    fontSize: '32px',
    textDecoration: 'none',
    marginLeft: '12px',
    fontFamily: '$heading',
})

export default function NavBar() {
    const router = useRouter()

    const pages = [
        'About',
        'Articles',
        'Projects'
 
    ]

    const [hovered, setHovered] = useState('')
    const { query } = useKBar()

    return (
        <AnimateSharedLayout>
            <Header>
               <Link href="/" passHref>
                  <ButtonLogo as="a">M</ButtonLogo>
               </Link>
            </Header>
        </AnimateSharedLayout>
    )
}