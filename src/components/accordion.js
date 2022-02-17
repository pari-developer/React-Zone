import React from 'react';

const divStyle = {
  backgroundColor: 'coral',
  width: '80%',
  height: '80%',
  padding: '6px',
  margin: '4px',
};
const childDivStyle = {
  backgroundColor: 'green',
  width: '80%',
  height: '80%',
  padding: '6px',
  margin: '4px',
};

function Accordion({ jsonData }) {
  console.log(jsonData);
  const [expand, setExpand] = React.useState(false);
  if (jsonData.content.length) {
    return (
      <>
        <div
          onClick={() => {
            console.log('hi');
            setExpand(!expand);
            console.log(expand);
          }}
          style={divStyle}
        >
          {jsonData.title}
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 15 }}>
          {jsonData &&
            jsonData.content &&
            jsonData.content.map((val) => {
              return <Accordion jsonData={val} />;
            })}
        </div>
      </>
    );
  } else {
    {
      console.log('test');
      return <div style={childDivStyle}>{jsonData.title}</div>;
    }
  }
}
export default Accordion;
