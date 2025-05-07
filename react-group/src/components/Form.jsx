import RegularButton from './ReqgularButton'

export default function Form({ handleSubmit }) {
    return (

        //START GAME FORM INITIAL BUTTON
        <form className="wrapper">
            <RegularButton handleClick={handleSubmit}>
                Start Game
            </RegularButton>
        </form>
    )
}