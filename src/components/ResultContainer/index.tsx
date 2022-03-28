import { Button, Container, Display } from '../UI';
import styles from './index.module.scss';

const ResultContainer = (): JSX.Element => {
  return (
    <div className={styles.result}>
        <Container inside='display' right={true}>
            <Display value={100}/>
        </Container>
        <Container inside='actions'right={true}>
            <Button size='small' variant='white'>/</Button>
            <Button size='small' variant='white'>x</Button>
            <Button size='small' variant='white'>-</Button>
            <Button size='small' variant='white'>+</Button>
        </Container>
        <Container inside='number' right={true}>
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
        <Container inside='action' right={true}>
            <Button size='large' variant='blue'>=</Button>
        </Container>
    </div>
  );
};

export default ResultContainer;
