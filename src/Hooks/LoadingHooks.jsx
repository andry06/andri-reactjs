
import { Grid } from  'react-loader-spinner';

const LoadingHooks = () => { 
        return(
            <Grid 
                className="andri"
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{display: 'inline-block'}}
                wrapperClass=""
                visible={true}
                />
        )
}

export default LoadingHooks;