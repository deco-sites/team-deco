interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Something went wrong!!" }: Props) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl mt-2 font-semibold text-red-400 mt-100">
        {name}
      </h1>
    </div>
  )
}