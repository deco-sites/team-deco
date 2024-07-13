interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "" }: Props) {
  return (
    <div>
      <h1 className="bg-red-200">
        It looks like you're offline.
      </h1>
    </div>
  )
}