var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'./components/Graphicloads-100-Flat-2-Contacts.ico'}/>
        <p className={'contactLabel'}>
            Imię: {this.props.contact.firstName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
        </a>
    </div>
    )
  },
});