import { Button, Container, Display } from '../UI';
import styles from './index.module.scss';

const ElementsContainer = (): JSX.Element => {
  return (
    <div className={styles.elements}>
        <Container inside='display'>
            <Display value={100}/>
        </Container>
        <Container inside='actions'>
            <Button size='small' variant='white'>/</Button>
            <Button size='small' variant='white'>x</Button>
            <Button size='small' variant='white'>-</Button>
            <Button size='small' variant='white'>+</Button>
        </Container>
        <Container inside='number'>
            <Button size='medium' variant='white'>7</Button>
            <Button size='medium' variant='white'>8</Button>
            <Button size='medium' variant='white'>9</Button>
            <Button size='medium' variant='white'>4</Button>
            <Button size='medium' variant='white'>5</Button>
            <Button size='medium' variant='white'>6</Button>
            <Button size='medium' variant='white'>1</Button>
            <Button size='medium' variant='white'>2</Button>
            <Button size='medium' variant='white'>3</Button>
            <Button size='large' variant='white'>0</Button>
            <Button size='medium' variant='white'>,</Button>
        </Container>
        <Container inside='action'>
            <Button size='large' variant='blue'>=</Button>
        </Container>
    </div>
  );
};

export default ElementsContainer;
