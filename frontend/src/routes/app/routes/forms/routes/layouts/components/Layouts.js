import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Layouts = () => {
    return(
        <section className="container-fluid with-maxwidth chapter">

            <article className="article">
                <h2 className="article-title">Basic Form</h2>
                <div className="box box-default">
                    <div className="box-body padding-xl">

                        <form role="form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Check me out
                                </label>
                            </div>
                            <RaisedButton label="Submit" primary={true} className="btn-w-md" />
                            <div className="divider"></div>
                        </form>

                    </div>
                </div>
            </article>


            <article className="article">
                <h2 className="article-title">Horizontal Form</h2>
                <div className="box box-default">
                    <div className="box-body padding-xl">

                        <form role="form">
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-md-2 control-label">Email</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-md-2 control-label">Password</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <div className="form-checkbox">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <RaisedButton label="Login" className="btn-w-md" />
                                </div>
                            </div>
                        </form>    

                    </div>
                </div>
            </article>


            <article className="article">
                <h2 className="article-title">Inline Form</h2>
                <div className="box box-default">
                    <div className="box-body padding-xl">

                        <form className="form-inline" role="form">
                            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />

                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">@</div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                            </div>

                            <div className="form-check mb-2 mr-sm-2 mb-sm-0">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Remember me
                                </label>
                            </div>
                            <RaisedButton label="Login" secondary={true} className="btn-w-md" />
                        </form>  

                    </div>
                </div>
            </article>


            <article className="article">
                <h2 className="article-title">Column sizing</h2>
                <div className="box box-default">
                    <div className="box-body">

                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-1">
                                    <input type="text" className="form-control" placeholder="col-md-1" />
                                </div>
                                <div className="col-md-11">
                                    <input type="text" className="form-control" placeholder="col-md-11" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-2">
                                    <input type="text" className="form-control" placeholder="col-md-2" />
                                </div>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="col-md-10" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="col-md-3" />
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="col-md-9" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-4">
                                    <input type="text" className="form-control" placeholder="col-md-4" />
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" placeholder="col-md-8" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-5">
                                    <input type="text" className="form-control" placeholder="col-md-5" />
                                </div>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" placeholder="col-md-7" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="col-md-6" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="col-md-6" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-7">
                                    <input type="text" className="form-control" placeholder="col-md-7" />
                                </div>
                                <div className="col-md-5">
                                    <input type="text" className="form-control" placeholder="col-md-5" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-8">
                                    <input type="text" className="form-control" placeholder="col-md-8" />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" placeholder="col-md-4" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="col-md-9" />
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="col-md-3" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="col-md-10" />
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control" placeholder="col-md-2" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                            <div className="row">
                                <div className="col-md-11">
                                    <input type="text" className="form-control" placeholder="col-md-11" />
                                </div>
                                <div className="col-md-1">
                                    <input type="text" className="form-control" placeholder="col-md-1" />
                                </div>                     
                            </div>

                            <div className="divider"></div>

                        </div>   

                    </div>
                </div>
            </article>

        </section>

    )
}

module.exports = Layouts;
