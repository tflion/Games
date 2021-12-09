import React, { ReactElement } from "react";
import withErrorBoundary from "src/hoc/withErrorBoundary";
import GameList from '../GameList'

const Home = (): ReactElement => (
    <main>
        <GameList />
    </main>
);

export default withErrorBoundary(Home);