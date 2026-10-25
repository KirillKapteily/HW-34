export default function PhoneBookSearchItem({contact}) {
    return(
        <li>
                  <h2>Name: {contact.name}</h2>
      <h2>Number: {contact.phone}</h2>
        </li>
    )
}