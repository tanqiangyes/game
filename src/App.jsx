import "./App.css";
import Gomoku from "./module/Gomoku.jsx";
import {Card} from "antd";

export default function Game() {
    const title = "Gomoku";
    return (
        <Card  title={ title } bordered={false} >
           <Gomoku />
        </Card>
    );
}