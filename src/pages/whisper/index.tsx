import Link from "next/link";
import { Configuration, OpenAIApi } from 'openai';
import React, { useCallback, useState } from "react";
import OptionList from "@/components/optionList";
import CommandInput from "@/components/CommandInput";

function Whisper() {
    const [userCommand, setUserCommand] = useState({
        commendText: '',
        responseText: '',
        temperature: '1',
        tone: 'neutral',
        writingStyle: 'standard',
    });

    const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN,
    });

    const openai = new OpenAIApi(configuration);

    const askToChatGPT = async () => {
        console.log(userCommand.commendText  + (' tone: ' + userCommand.tone) + (' writing style:' + userCommand.writingStyle) + ' 200자 미만으로 만들어줘.');
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: userCommand.commendText  + (' tone: ' + userCommand.tone) + (' writing style:' + userCommand.writingStyle) + ' 200자 미만으로 만들어줘.',
                max_tokens: 300,
                temperature: Number(userCommand.temperature),
            });

            const returnText = completion.data.choices[0].text;
            if (returnText) handleCommandState('responseText', returnText);

        } catch (error: any) {
            if (error.response) {
                alert(error.response.status + ' / ' + error.response.data);
            } else {
                alert(error.message);
            }
        }
    }

    const handleCommandState = useCallback(
        (key: string, value: string) => {
          setUserCommand(state => ({...state, [key]: value}));
        },
        [],
    )
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 500}}>
                <h1>Rendering Test</h1>
                <p>Prepared to weave words into masterpieces.</p>
                {/*insert commend & get response*/}
                <CommandInput commendText={userCommand.commendText} handleCommandState={handleCommandState} />
                <button onClick={askToChatGPT}>Send</button>
                <div>
                    <h3>Response</h3>
                    <div
                        style={{height: 200, border: '1px solid wheat'}}
                    >
                        {userCommand.responseText}
                    </div>
                </div>
                {/* more options */}
                <OptionList temperature={userCommand.temperature} tone={userCommand.tone} writingStyle={userCommand.writingStyle} handleCommandState={handleCommandState} />
            </div>
            {/* move to home */}
            <Link href="/">Go Back to Home</Link>
        </div>
    )
}

export default Whisper;