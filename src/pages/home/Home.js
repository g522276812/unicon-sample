import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import './home.css';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
    {
        imgPath:
            'http://taxi.je/wp-content/uploads/2018/05/Jersey-Cows-Header-1_0.jpg',
    },
    {
        imgPath:
            'https://s3-eu-central-1.amazonaws.com/centaur-wp/theengineer/prod/content/uploads/2017/08/16122911/Cows-e1502882983447.jpg',
    },
    {
        imgPath:
            'https://i.ytimg.com/vi/JcJrjx91tlM/maxresdefault.jpg',
    },
    {
        imgPath:
            'https://www.alltech.com/sites/default/files/styles/featured_article/public/2017-12/Alltech.com-dairy-homepage.png?itok=B1bpbwqu',
    },


];

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        height: '700px',
    },
});

class TextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div className={classes.root}>


                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img
                                    className={classes.img}
                                    src={tutorialSteps[activeStep].imgPath}
                                    alt={tutorialSteps[activeStep].label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
                <br/>
                <br />
                <div className='fontStyle'>
                    With an aim to provide an excellent quality medicine and Allopathic products, the inception of Phoenix Life Science Pvt. Ltd. took place in 2009. Since then, we have been moving ahead with a zeal to setup a benchmark of superiority in the market for the first-class Veterinary medicines. Moreover, our products are reliable and totally safe to use.
                    Stringent quality testing
                    We are the suppliers and distributors of only pure and 100% effective Veterinary products in Rohtak. Before supplying it to our clients, we make sure that all the products are being tested under the strict quality parameters. Among other topmost pharmaceutical companies in India, we have created a special place for us in the market.
                    Our adept team
                    We are a team of more than 100 expert professionals who have got a vast experience in this medical field. Our professionals are highly qualified and have in-depth knowledge in their respective fields. Working in close coordination, our professionals aim to provide our clients with the superior quality of Veterinary and Allopathic Products
                </div>
            </div>
        );
    }
}

TextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
