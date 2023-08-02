import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { CloudArrowDownIcon, ClipboardIcon } from '@heroicons/react/24/outline';

export default function GrammarViewer(
    {
        value
    } : {
        value: string
    }
) {
    return (
        <div className='px-4 py-4 rounded-md bg-[#2e3440]'>
            <div className=' flex flex-row items-center h-8'>
                <p className=' flex-1 font-semibold text-primary-content'>
                    Generated Grammar
                </p>
                <div className='flex flex-row gap-2'>
                    <button className=' p-1 hover:bg-accent/80 rounded-md' 
                            onClick={() => navigator.clipboard.writeText(value)}>
                        <ClipboardIcon className=' cursor-pointer h-6 w-6 text-primary-content '/>
                    </button>
                    <button className=' p-1 hover:bg-accent/80 rounded-md'>
                        <CloudArrowDownIcon className=' cursor-pointer h-6 w-6 text-primary-content '/>
                    </button>
                </div>
            </div>
            <CodeMirror
                value={value}
                height='84vh'
                theme={nord}
                editable={false}
            />
        </div>
    )
}