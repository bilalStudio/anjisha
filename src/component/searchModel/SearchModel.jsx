import React from 'react';

const SearchModel=(props)=> {
  return (
    <div className="modal fade search-modal" id="searchModal" tabindex="-1">
      <button type="button" className="close" data-bs-dismiss="modal">
        <span className="flaticon-cross"></span>
      </button>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="search-block clearfix">
            <form>
              <div className="form-group">
                <input className="form-control" placeholder="Search Here..." type="text"/>
                <button type="submit" value="Search"><i className="flaticon-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
}

export default SearchModel;