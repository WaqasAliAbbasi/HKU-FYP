from services.stock.stock import Stock


def get_stock_history(stock_symbol):
    stock = Stock(stock_symbol)
    return stock.get_history_dict()
