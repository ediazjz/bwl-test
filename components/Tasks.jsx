export const Tasks = ({ content }) => {
  return (
    <ul>
      {content.map((task, index) => {
        return <li key={index}>{task.value}</li>
      })}
    </ul>
  )
}
