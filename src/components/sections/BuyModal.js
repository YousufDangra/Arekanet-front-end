import React, {useState, useContext,useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "../elements/Button";
import {useStore} from "../../context/GlobalState";
import {GlobalContext} from "../../context/GlobalState";
import {setModal} from "../../store/actions";
import Image from "../elements/Image";
import {buyTokensAsync,rateAsync} from '../../store/asyncActions';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#151719",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const BuyModal = () => {
  const classes = useStyles();
  // const {setModal} = useContext(GlobalContext);
  const [
    {web3, accounts,contract, web3LoadingErrorMessage, open},
    dispatch,
  ] = useStore();

  const [modalStyle] = useState(getModalStyle);
  const [modalState, setValue] = useState(false);
  const [etherValue, setEtherValue] = useState("0");
  const [weiValue, setWeiValue] = useState("");
  const [rate, setRate] = useState("");

  const onSubmit = async () => {
    // e.preventDefault();
    // setAuction(formData)
    // console.log("thi is auction auciton", formData);
    // setTransactionSuccessful(true);
    // setTransactionError("");
    let etherToWei = etherValue * 10e17;
    let stringEtherToWei = etherToWei.toString();
    try {
      // setTransactionInprocess(true)
      await buyTokensAsync(accounts[0],accounts,contract,stringEtherToWei,dispatch)
      // console.log("This is form data from dispatch async", auction);
      // setTransactionInprocess(false);
      // setTransactionSuccessful(true);
    } catch (error) {
      console.log("error trax = ", error);
      // setTransactionInprocess(false);
      // setTransactionSuccessful(false);
      // setTransactionError(error.message);
    }
  };
  const handleOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    dispatch(setModal(modalState));
    console.log("this is for state", modalState);
    console.log("this is for open", open);
  };
  useEffect(() => {
    if (web3 != null && contract != null) {
      const handleRate = async () => {
        try {
          let rate = await rateAsync(contract);
          setRate(rate)
        }
        catch (error) {
          console.log("this is ", error)
        }
      }
      handleRate();

    }

  }, [web3, contract])
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{textAlign: "center"}}>
        <br />
        {/* {web3 == null ? (
          <div> </div>
        ) : (
          <>
      <p> 1ETH = 200,000 FYNX</p>  
     <h6> FYNX = {(web3.utils.fromWei(weiValue, "wei")/5000000000000)} </h6>  
          </>
        )} */}
        <h3 className="mt-0 mb-16 reveal-from-bottom">
          Buy <span className="text-color-primary"> AKA </span> Now!
        </h3>
        <h5>1 ETH = {rate? rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): "0"} AKA</h5>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginLeft: "93px",
          }}
        >
          {" "}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/cdn-clients-other-use.appspot.com/o/images%2Fei_1619280329211-removebg-preview.png?alt=media&token=8a2a37ba-9be5-443f-9360-2c9eab939464"
            alt="Open"
            width={146}
            height={30}
            style={{marginTop: "10px"}}
            className="modal-rotate"
          />
        </div>

        {
          etherValue<=0.9 ?
          <h5 className="lxry-heading"> {rate ? (((etherValue * 10e17) / (10e17 / rate)).toFixed(1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} AKA</h5>
          :
          <h5 className="lxry-heading"> {rate ? (((etherValue * 10e17) / (10e17 / rate)).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} AKA</h5>
        }
        {/* <h3 className="lxry-heading"> {rate ? (((etherValue * 10e17) / (10e17 / rate)).toFixed(1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} AKA</h3> */}

        {/* <TextField
          style={{backgroundColor: "white"}}
          id="outlined-basic"
          label="Enter Ether"
          variant="outlined"
          value={etherValue}
          onChange={(e) => setEtherValue(e.target.value)}
          type="number"
          inputProps={{maxLength: 1}}
        /> */}
  <TextField value={etherValue} onChange={(e) => setEtherValue(e.target.value)} id="filled-basic" label="Enter Ether" variant="filled" className="modal-input"/>
  <br />

        <br />
        <button
            onClick={onSubmit}
          //   onClick={handleClose}
            className="button-buy-modal"
            style={{fontFamily:"'Source Code Pro', monospace",marginTop: "20px"}}


        >
          BUY AKA
        </button>
      </div>
    </div>
  );
  console.log("this is for value", etherValue);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default BuyModal;
