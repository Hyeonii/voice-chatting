import { toneOptionList, writingStyleList } from '@/constants/constants'
import { memo } from 'react'

interface OptionTypes {
    temperature: string;
    tone: string;
    writingStyle: string;
    handleCommandState: (key: string, vlaue: string) => void;
}

function OptionList({temperature, tone, writingStyle, handleCommandState}: OptionTypes) {

    return (
        <div>
            <h3>More options</h3>
            <p>temperature</p>
            <div>
                <input type='range' 
                onChange={(e) => handleCommandState('temperature', e.target.value)}
                defaultValue={temperature} 
                min='0' 
                max='1' 
                step="0.1"
            />
                <span> {temperature}</span>
            </div>
            <p>Choose the tone of the sentence you want.</p>
            <ul 
                style={{
                    display: 'grid',
                    gridTemplateColumns: '150px 150px 150px'
                }}>
                {toneOptionList.map((toneText, index) => {
                    return(
                        <li 
                            key={`toneText_${index}`}
                            style={{backgroundColor: tone === toneText ? 'lightblue' : 'white'}} 
                            onClick={() => handleCommandState('tone', toneText)}
                        >
                            {toneText}
                        </li>
                    )
                })}
            </ul>
            <p>Choose the writingStyle.</p>
            <ul 
                style={{
                    display: 'grid',
                    gridTemplateColumns: '150px 150px 150px'
                }}>
                {writingStyleList.map((styleText, index) => {
                    return(
                        <li 
                            key={`styleText_${index}`}
                            style={{backgroundColor: writingStyle === styleText ? 'lightPink' : 'white'}} 
                            onClick={() => handleCommandState('writingStyle', styleText)}
                        >
                            {styleText}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default memo(OptionList);
