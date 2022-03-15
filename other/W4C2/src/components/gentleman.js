import { Button } from './buttons';

export const Gentleman = ({ gentleman, deleteman }) => {
  console.log(gentleman);
  return (
    <>
      <li className={gentleman.selected ? 'gentleman selected' : 'gentleman'}>
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={'img/' + gentleman.picture}
            alt="The Fary pointing at you"
          />
          <span className="gentleman__initial">
            {gentleman.picture[0].toUpperCase()}
          </span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{gentleman.name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">
                Profession:{gentleman.profession}
              </span>
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">
                Status:{gentleman.status}
              </span>
              RIP
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">
                Twitter:{gentleman.twitter}
              </span>{' '}
            </li>
          </ul>
        </div>
        <Button action="delete" deleteman={deleteman} />
        <Button action="select" gentleman={gentleman} />
      </li>
    </>
  );
};
