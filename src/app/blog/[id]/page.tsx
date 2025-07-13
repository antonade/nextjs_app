type Props = { params: { id: string } }

export default function BlogDetail({ params }: Props) {
  return <h1>Blog ID: {params.id}</h1>
}
