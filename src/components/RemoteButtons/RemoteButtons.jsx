import React from 'react';

const RemoteButtons = (props) => (
        <div>
            <button>
                Lock/Unlock
            </button>
            <button>
                Windows
            </button>
            <form>
                <label>
                    Temp:
                    <input type='text' placeholder='64' />
                </label>
                <input type='submit' value='Submit' />
            </form>
            <button>
                Start/Stop
            </button>
        </div>
)

export default RemoteButtons;