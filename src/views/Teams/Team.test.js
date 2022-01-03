import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Team from './Team';

test("should render a team's details", async () => {
  // render the component

  // VERSION 1
  // When the route uses the component prop
  // <Route path="/teams/:id" component={Team} />
  // The component itself is getting the id information from the props
  // we can fake that out in our test by passing props that looks like the
  // react router props
  // Since our component uses a <Link> we do need to wrap our test in a
  // MemoryRouter but since its not using anything else from React Router
  // we don't have to redefine routes
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );

  // VERSION 2
  // When the route does not use component prop (uses useParams hook instead)
  // i.e. looks like this and the component gets the id from useParams
  // <Route path="/teams/:id">
  //    <Team />
  // </Route>
  // Because the Team component is dependent on React Router hook, we have to
  // render it inside of MemoryRouter AND generate the Route inside of the test
  // so that the test has all the information it needs to render
  // const { container } = render(
  //   <MemoryRouter initialEntries={['/teams/2']}>
  //     <Route path="/teams/:id">
  //       <Team />
  //     </Route>
  //   </MemoryRouter>
  // );

  await screen.findByText('Stumptown Lumberjacks');
  expect(container).toMatchSnapshot();
});
