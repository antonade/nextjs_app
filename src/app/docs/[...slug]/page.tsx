type Props = { params: { slug: string[] } }

export default function DocsPage({ params }: Props) {
  return (
    <>
      <h1>Dokumentasi:</h1>
      <p>{params.slug.join(" / ")}</p>
    </>
  )
}
