import React from 'react';

class TooltipData extends React.Component {
    render() {
        const founders = this.props.founder.split(', ');
        const linkedinUrl = this.props.linkedinUrl;
        var out = []
        if(linkedinUrl.length !== 0) {
          // out.push(<div>LinkedIn account for the founder:</div>)
          out.push(linkedinUrl.map((item, index) => <a style= {{color: 'white'}}rel="noopener noreferrer" href={item} target='_blank'> {founders[index]}<br/></a>))
        }
        else out = <div>No LinkedIn accounts for the founder.</div>
        return (
          <div>
            {out}
          </div>
        )
    }
  }

export default TooltipData;
