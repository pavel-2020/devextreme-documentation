Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light)'s [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') property:

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                data-field="firstName"
                caption="Name"
            />
            <DxColumn
                data-field="lastName"
                caption="Surname"
            />
        </DxDataGrid>
    </template>

    <script>
    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

DevExtreme collection UI components also support the `DxItem` element. It allows you to declare collection items in the UI component markup. `DxItem` can contain custom markup and have attributes that control parts of item appearance, such as `badge` in the following code. The attributes are described in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') section of each collection UI component. Ensure to specify that an item's content is in the default [slot](https://vuejs.org/v2/guide/components-slots.html).

    <!-- tab: App.vue -->
    <template>
        <DxList>
            <DxItem #default>Orange</DxItem>
            <DxItem #default badge="New">White</DxItem>
            <DxItem #default>Black</DxItem>
        </DxList>
    </template>

    <script>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxItem
        }
    }
    </script>

`DxItem` also supports structural directives provided by Vue, such as `v-for`:

    <!-- tab: App.vue -->
    <template>
        <DxList>
            <DxItem #default><h1>Available items</h1></DxItem>
            <DxItem
                v-for="item in listItems"
                :key="item.text"
                :badge="item.badge"
                #default>
                {{ item.text }}
            </DxItem>
        </DxList>
    </template>

    <script>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxItem
        },
        data() {
            return {
                listItems: [{
                    text: 'Cars',
                    badge: '12'
                }, {
                    text: 'Bikes',
                    badge: '5'
                }]
            }
        }
    }
    </script>
