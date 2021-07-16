import { Card } from './Card';
export const CardList = ({robots}) => {
  return(
    <>
      { robots.map((robot)=> {
        const {id, name, username, email} = robot;
        return <Card key={id + username} id={id} name={name} username={username} email={email} />;
      })}
    </>
  )
}