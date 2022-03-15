import React, { Component } from 'react';

import { connect } from 'react-redux';

export function AllDates(){
    render() {
    return(
        <div>
            <h1>All Dates</h1>
        </div>
    );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllDates);