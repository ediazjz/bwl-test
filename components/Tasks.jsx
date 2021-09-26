import PropTypes from 'prop-types'

export const Tasks = ({ content }) => {
  return (
    <ul>
      {content.map((task, index) => {
        return <li key={index}>{task.value}</li>
      })}
    </ul>
  )
}

Tasks.propTypes = {
  content: PropTypes.array.isRequired
}
