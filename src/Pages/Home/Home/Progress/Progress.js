import React from 'react';

const Progress = () => {
    return (
        
            <div className='text-center'>
                <h1 className='text-orange-600 pb-5'>My Work Progress</h1>
                <p className='text-xl'>AutoCad Design <progress className="progress progress-error w-56" value="90" max="100"></progress></p><br />
                <p className='text-xl'>Planing <progress className="progress progress-error w-56" value="80" max="100"></progress></p><br />
                <p className='text-xl'>Estimating <progress className="progress progress-error w-56" value="90" max="100"></progress></p><br />
                <p className='text-xl'>Monitoring <progress className="progress progress-error w-56" value="90" max="100"></progress></p><br />

            </div>
        
    );
};

export default Progress;