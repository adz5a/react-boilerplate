import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../store";


export interface MessageProps {
    message: string;
}
export class Message1 extends React.Component<MessageProps> {

    render () {
        return (
            <p>
                <span>hello {this.props.message}</span>
            </p>
        );
    }

}

export function Message2 ({ message }: MessageProps) {
    return (
        <p>
            <span>yolo {message}</span>
        </p>
    );
}

const whatAThunk = (dispatch: Dispatch<State>) => {
    
    dispatch({
        type: "hello"
    });

};

const enhance = connect(
    undefined,
    {
        echo() {
            return (dispatch: Dispatch<State>) => {
                return whatAThunk;
            }
        }
    }
);

export interface EchoProps {
    echo(): void;
}
export class Echo extends React.Component<EchoProps, {}> {
    render () {
        return <button onClick={this.props.echo}>echo</button>;
    }
}

export const EnhancedEcho = enhance(Echo);
