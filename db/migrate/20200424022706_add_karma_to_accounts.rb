class AddKarmaToAccounts < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :karma, :integer, defalt: 0
  end
end
