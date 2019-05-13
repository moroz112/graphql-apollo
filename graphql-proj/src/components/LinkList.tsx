import * as React from 'react';
import { Component, Fragment } from 'react';
import { Query, ApolloConsumer} from 'react-apollo'
import gql from 'graphql-tag'
import { observer } from 'mobx-react';

import baseStore from '../base-store'

import { Link } from './Link';


const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
@observer
export class LinkList extends Component {

    render() {
        return (
            <Fragment>
                <Query query={FEED_QUERY}>
                    {({ loading, error, data }: any) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>

                        const linksToRender: any = data.feed.links;

                        return (
                            <div>
                                {linksToRender.map((link: any) => <Link key={link.id} link={link} />)}
                            </div>
                        )
                    }}
                </Query>
            </Fragment>
        )
    }
}