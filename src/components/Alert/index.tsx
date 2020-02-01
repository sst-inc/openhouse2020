import React, {ReactNode} from "react";
import {Paragraph, Dialog, Portal} from 'react-native-paper';

export default function Alert(props: { visible: boolean; onDismiss(): void, title?: string; content?: string; dialogActions: ReactNode }) {
    return (
        <Portal>
            <Dialog
                visible={props.visible}
                onDismiss={() => {
                    if (props.onDismiss) {
                        props.onDismiss()
                    }
                }}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{props.content ? props.content : null}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    {props.dialogActions}
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}
