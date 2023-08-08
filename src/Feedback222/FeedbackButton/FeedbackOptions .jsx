
const FeedbackOptions    = ({ options, onFeedbackOption }) => {
    return options.map(option => (
        <button key={option} type='button' onClick={()=>onFeedbackOption(option)}>{ option}</button>
    ))
}


export default FeedbackOptions ;



