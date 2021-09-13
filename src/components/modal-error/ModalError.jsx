import { Dialog, Grid, makeStyles, Typography } from "@material-ui/core"
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(() => ({
    modal: {
      textAlign:'center',
      padding:'30px'
    },
    subtitleStyle:{
        marginTop:'15px'
    },
    iconColor:{
        color:'red',
        width:'40px',
        height:'40px',
    }
  }));

function ModalError(props){
    const { open, handleClose } = props;
    const { modal, subtitleStyle, iconColor} = useStyles();    

    return(
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"            
        >
            <Grid container justifyContent="center" className={modal}>
                <Grid item xs={12} >                    
                    <ErrorIcon className={iconColor} />
                </Grid>                
                <Grid item xs={10} >
                    <Typography variant="h6" className={subtitleStyle}>
                        Please write a correct city
                    </Typography>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default ModalError