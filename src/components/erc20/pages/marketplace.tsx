import React from 'react';

import { CheckMetamaskStateModalContainer } from '../../common/check_metamask_state_modal_container';
import { ColumnNarrow } from '../../common/column_narrow';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';
import { BuySellContainer } from '../marketplace/buy_sell';
import { OrderBookTableContainer } from '../marketplace/order_book_otc';
import { OrderHistoryContainer } from '../marketplace/order_history';
import { FillOrderContainer } from '../marketplace/fill_order';
import { WalletBalanceContainer } from '../marketplace/wallet_balance';

class Marketplace extends React.PureComponent {
    public render = () => {
        return (
            <Content>
                <ColumnNarrow>
                    <WalletBalanceContainer />
                    <BuySellContainer />
                </ColumnNarrow>
                <ColumnWide>
                    <OrderBookTableContainer />
                    <OrderHistoryContainer />
                </ColumnWide>
                <ColumnNarrow>
                    
                    <FillOrderContainer />
                </ColumnNarrow>
                <CheckMetamaskStateModalContainer />
            </Content>
        );
    };
}

export { Marketplace };
