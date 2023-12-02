import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css"

const ErrorModal = ({ title, message, onError }) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={onError}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onError}>Okey</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal