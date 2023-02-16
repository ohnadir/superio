import Router from "next/router";

const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="“Milyen munkát keresel?"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="Hol keresel" />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => Router.push("/job-list-v1")}
          >
            <span className="btn-title">Keresés</span>
          </button>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
