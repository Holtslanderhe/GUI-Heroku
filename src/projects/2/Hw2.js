const START = 1;
const END = 104;

/*
* Styles for the grid and blocks.
* */
const styles = {
        grid: {
                display: "grid",
                gridTemplateColumns: "repeat(8, 10%)",
                gap: "1%",
                margin: "auto",
                width: "50%"
        },
        blocks: {
                display: "grid",
                textAlign: "center",
                fontSize: "150%",
                alignItems: "center",
        },
        odd: {
                backgroundColor: "yellow",
        },
        even: {
                backgroundColor: "green"
        },
        prime: {
                backgroundColor: "red",
                border: "5px solid black"
        }
}
/*
* Checks the primeness of a number
* */
function CheckPrime(number) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                        return false;
                }
        }
        return number > 1;
}

/*
* Changes the background color of the grid blocks based on their number
* */
function Block({number}) {
        if (CheckPrime(number)) {
                return (
                    <p style={{...styles.blocks, ...styles.prime}}>{number}</p>
                );
        }
        else if (number % 2 === 0) {
                return (
                    <p style={{...styles.blocks, ...styles.even}}>{number}</p>
                );
        }
        else {
                return (
                    <p style={{...styles.blocks, ...styles.odd}}>{number}</p>
                );
        }
}

/*
* Creates a grid container for blocks
* */
function Grid({start, end}) {
        let blockArr = [];
        for (let i = start; i <= end; i++) {
                blockArr.push(<Block number={i} />);
        }

        return (
            <div style={styles.grid}>
                    {blockArr}
            </div>
        );
}

function Hw2() {
        return (
            <Grid start={START} end={END}/>
        );
}

export default Hw2;
