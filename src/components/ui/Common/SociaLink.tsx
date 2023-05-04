import Link from 'next/link'

const SocialLink = ({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) => {
  return <Link href={link}>{children}</Link>
}

export default SocialLink
