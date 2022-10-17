import Wrapper from "../../ui/Wrapper/Wrapper"
import Text from "../Text/Text"
import Card from "../../ui/Card/Card"
import Button from "../Button/Button";
import Image from "../Image/Image";
import classes from "../../ui/Global.module.css";
import { useRecoilState } from "recoil";
import { bookCount, bookPrice } from "../Storage/Storage";

const Books = () => {

    const [updatedPrice, setUpdatedPrice] = useRecoilState(bookPrice);
    const [updatedCount, setUpdatedCount] = useRecoilState(bookCount);

    const bookList = [
        {name: 'Pride and Prejudice', author: 'Jane Austen', price: 15, img: '/assets/pandp.jpg'},
        {name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: 18, img:'/assets/tpodg.jpg'},
        {name: 'Me before you', author: 'Jojo Moyes', price: 20, img: '/assets/mby.jpg'},
        {name: 'Michael Thomas: The Journey Home', author: 'Kryon', price: 30, img: '/assets/mthasa.jpg'},
        {name: 'The Lady of the Camellias', author: ' Alexandre Dumas fils', price: 10, img: '/assets/tdotc.jpg'},
        {name: 'Sense and Sensibility', author: 'Jane Austen', price: 12, img: '/assets/sands.jpg'},
        {name: 'Persuasion', author: 'Jane Austen', price: 12, img: '/assets/p.jpg'},
        {name: 'Emma', author: 'Jane Austen', price: 18, img: '/assets/e.jpg'},
        {name: 'Wuthering Heights', author: 'Emily Bronte', price: 30, img: '/assets/wh.jpg'},
        {name: 'Jane Eyre', author: 'Charlotte Bronte', price: 21, img: '/assets/je.jpg'},
        {name: 'The Professor', author: 'Charlotte Bronte', price: 10, img: '/assets/tp.jpg'},
        {name: 'Villette', author: 'Charlotte Bronte', price: 11, img: '/assets/v.jpg'}
    ];

    const addToBasket = (value) => {
        setUpdatedCount(updatedCount + 1);
        setUpdatedPrice(updatedPrice + value)
    }

    return (
        <Wrapper>
            <Card className={classes['books-container']}>
                {bookList.map(book => {
                    return (
                        <Card key={book.name} className={classes['books-container-each']}>
                            <Image src={book.img} />
                            <Text> {book.name} </Text>
                            <Text> {book.author} </Text>
                            <Text> {book.price} $ </Text>
                            <Button onClick={() => addToBasket(book.price)} className={classes['bookButton']}> 
                                add to basket 
                            </Button>
                        </Card>
                    )
                })}
            </Card>
        </Wrapper>
    )
}

export default Books;