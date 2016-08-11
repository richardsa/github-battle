var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
    getInitialState: function () {
      return {
          isLoading: true,
          scores: []
        } 
    },
    componentDidMount: function (){
        
        console.log(this.props.location.state.playerInfo);  
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))
    },
    render: function () {
        return (
            <Results 
            playersInfo={this.props.location.state.playerInfo}
            isLoading={this.state.isLoading} 
            scores={this.state.scores} />
            );
    }
});

module.exports = ResultsContainer;