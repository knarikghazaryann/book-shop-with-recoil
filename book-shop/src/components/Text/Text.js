import classes from '../../ui/Global.module.css'

const Text = (props) => {
    return (
        <p className={classes.bookInfo}> {props.children} </p>
    )
}

export default Text;