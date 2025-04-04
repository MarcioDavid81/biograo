import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from 'next/link'

interface SocialNetwork {
  id: string
  name: string
  url: string
  icon: string
}

export default function SocialLinks() {
  const socialNetworks: SocialNetwork[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'youtube'
    }
  ]

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        Siga-nos nas redes sociais para ficar por dentro das novidades, 
        promoções e conteúdos exclusivos.
      </p>
      
      <ul className="flex flex-wrap gap-4">
        {socialNetworks.map((network) => (
          <li key={network.id}>
            <Link 
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <SocialIcon name={network.icon} />
              <span>{network.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ name }: { name: string }) {
  return (
    <span className="w-5 h-5 flex items-center justify-center">
      {name === 'instagram' && <InstagramIcon />}
      {name === 'facebook' && <FacebookIcon />}
      {name === 'linkedin' && <LinkedInIcon />}
      {name === 'youtube' && <YouTubeIcon />}
    </span>
  )
}

function InstagramIcon() {
  return <span className="text-pink-600"><FaInstagram /></span>
}

function FacebookIcon() {
  return <span className="text-blue-600"><FaFacebook /></span>
}


function LinkedInIcon() {
  return <span className="text-blue-700"><FaLinkedin /></span>
}

function YouTubeIcon() {
  return <span className="text-red-600"><FaYoutube /></span>
}