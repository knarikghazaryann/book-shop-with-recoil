import Wrapper from "../../ui/Wrapper/Wrapper";
import Card from "../../ui/Card/Card";
import { useRecoilState } from "recoil";
import { bookCount, bookPrice, userMoney } from "../Storage/Storage";
import Text from "../Text/Text";
import Button from "../Button/Button";
import classes from "../../ui/Global.module.css"
import { useState } from "react";

const Header = () => {
    const [updatedPrice, setUpdatedPrice] = useRecoilState(bookPrice);
    const [updatedCount, setUpdatedCount] = useRecoilState(bookCount);
    const [updatedMoney, setUpdatedMoney] = useRecoilState(userMoney);
    const [isEnoughMoney, setIsEnoughMoney] = useState(true);
    const error = 'Your money is not enough to checkout. Please clear the basket and try again.';

    const reset = () => {
        setUpdatedCount(0);
        setUpdatedPrice(0);
    }

    const checkout = () => {
        if(updatedMoney >= updatedPrice) {
            setUpdatedMoney(updatedMoney - updatedPrice);
            reset();
        } else {
            setIsEnoughMoney(false);
        }
    }

    const clearBasket = () => {
        if(updatedCount) {
            reset();
            setIsEnoughMoney(true)
        }
    }

    return (
        <Wrapper>
            <Card className={classes['header']}>
                <Card>
                    <Text> Balance: {updatedMoney} $ </Text>
                </Card>
                <Card className={classes['header-info']}>
                    <Button onClick={clearBasket} className={classes['bookButton']}> clear basket </Button>
                    <Text> Goods: {updatedCount} </Text>
                    <Text> Pay: {updatedPrice} $ </Text>
                    {isEnoughMoney ? <Button onClick={checkout} className={classes['bookButton']}> checkout </Button>
                    : <p className={classes['error-text']}> {error} </p>}
                </Card>
            </Card>
        </Wrapper>
    )
}

export default Header;