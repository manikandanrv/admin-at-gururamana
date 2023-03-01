import React, { Component } from "react";
import moment from "moment";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import randomColor from "randomcolor";

import Timeline, {
    TimelineHeaders,
    SidebarHeader,
    DateHeader
  } from "react-calendar-timeline";
  
  import 'react-calendar-timeline/lib/Timeline.css'
  import './../../assets/app.css'
  let randomSeed = Math.floor(Math.random() * 1000);

const groups = [
    { id: 100, title: 'KuranguThottam' , root: true, parent: null}, 
    { id: 101, title: 'Room M1'  , root: false, parent: 100}, 
    { id: 102, title: 'Room M2'  , root: false, parent: 100},
    { id: 103, title: 'Room M3' , root: false, parent: 100},
    { id: 200, title: 'Achalam - AA' , root: true, parent: null}, 
    { id: 201, title: 'AA-1'  , root: false, parent: 200}, 
    { id: 202, title: 'AA-2'  , root: false, parent: 200},
    { id: 203, title: 'AA-3' , root: false, parent: 200}
   
  ]

  var items = [
  {
    id: 1,
    group: 100,
    title: '',
  },
  {
    id: 2,
    group: 102,
    title: 'Prasanna from Chennai, India',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(2, 'day'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 101,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 101,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 101 }),
  },
  {
    id: 3,
    group: 103,
    title: 'Arun from Chennai, India',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'day'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 102,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 102,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 102 }),
  },
  {
    id: 4,
    group: 101,
    title: 'Manikandan (checkin:10.00Am 16th March)',
    start_time: moment(),
    end_time: moment().add(14, 'hour'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 103,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 103,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 103 }),
  },
  {
    id: 1,
    group: 100,
    title: '',
  },
  {
    id: 2,
    group: 102,
    title: 'Prasanna from Chennai, India',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(2, 'day'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 101,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 101,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 101 }),
  },
  {
    id: 3,
    group: 103,
    title: 'Arun from Chennai, India',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'day'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 102,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 102,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 102 }),
  },
  {
    id: 4,
    group: 101,
    title: 'Manikandan (checkin:10.00Am 16th March)',
    start_time: moment(),
    end_time: moment().add(14, 'hour'),
    bgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 103,
        format: "rgba",
        alpha: 0.6
      }),
      selectedBgColor: randomColor({
        luminosity: "light",
        seed: randomSeed + 103,
        format: "rgba",
        alpha: 1
      }),
      color: randomColor({ luminosity: "dark", seed: randomSeed + 103 }),
  }

  ]



var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

export default class App extends Component {
  constructor(props) {
    super(props);

    const defaultTimeStart = moment()
      .startOf("day")
      .toDate();
    const defaultTimeEnd = moment()
      .startOf("day")
      .add(1, "day")
      .toDate();

    // convert every 2 groups out of 3 to nodes, leaving the first as the root
    const newGroups =groups;
    // const newGroups = groups.map(group => {
    //   const isRoot = (parseInt(group.id) - 1) % 3 === 0;
    //   const parent = isRoot ? null : Math.floor((parseInt(group.id) - 1) / 3) * 3 + 1;

    //   return Object.assign({}, group, {
    //     root: isRoot,
    //     parent: parent
    //   });
    // });

    this.state = {
      groups: newGroups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      openGroups: {}
    };
  }

  toggleGroup = id => {
    const { openGroups } = this.state;
    this.setState({
      openGroups: {
        ...openGroups,
        [id]: !openGroups[id]
      }
    });
  };

  groupRenderer = ({ group }) => {
    const className = group.root ? "highlight" : "";
    return <div className={className}>{group.title}</div>;
  };


  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps
  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? "red"
        : item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            // borderColor,
            // borderStyle: "solid",
            // borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1
          },
          onMouseDown: () => {
            console.log("on item click", item);
          }
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };
  handleItemClick = (itemId, time, edge) => {
    // const { items } = this.state;
    alert("Item " + itemId + " clicked");
  }
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(
        item =>
          item.id === itemId
            ? Object.assign({}, item, {
                start: dragTime,
                end: dragTime + (item.end - item.start),
                group: group.id
              })
            : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  handleItemResize = (itemId, time, edge) => {
    // const { items } = this.state;

    this.setState({
      items: items.map(
        item =>
          item.id === itemId
            ? Object.assign({}, item, {
                start: edge === "left" ? time : item.start,
                end: edge === "left" ? item.end : time
              })
            : item
      )
    });
    alert("Resized ::" + itemId + "::" + time);
    this.state.items.find(x => x.id === itemId).end_time=time;
    this.state.items.find(x => x.id === itemId).title="Time changed";

    console.log("Resized", itemId, time, edge);
  };


  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd, openGroups } = this.state;

    // hide (filter) the groups that are closed, for the rest, patch their "title" and add some callbacks or padding
    const newGroups = groups
      .filter(g => g.root || openGroups[g.parent])
      .map(group => {
        return Object.assign({}, group, {
          title: group.root ? (
            <div onClick={() => this.toggleGroup(parseInt(group.id))} style={{ cursor: "pointer" }}>
              {openGroups[parseInt(group.id)] ? "[-]" : "[+]"} {group.title}
            </div>
          ) : (
            <div style={{ paddingLeft: 20 }}>{group.title}</div>
          )
        });
      });

    // return (
    //   <Timeline
    //     groups={newGroups}
    //     items={items}
    //     keys={keys}
    //     sidebarWidth={150}
    //     canMove
    //     canResize="right"
    //     canSelect
    //     itemsSorted
    //     itemTouchSendsClick={false}
    //     stackItems
    //     itemHeightRatio={0.75}
    //     showCursorLine
    //     defaultTimeStart={moment().add(-12, 'hour')}
    //     defaultTimeEnd={moment().add(12, 'hour')}
    //   />
    // );

    return (
        <Card>
          <CardBody>
            <CardTitle tag="h5">Rooms Snapshort</CardTitle>
            <CardSubtitle className="text-muted" tag="h6">
            Room Reservations @ Guru Ramana
            </CardSubtitle>
            <Timeline
              groups={newGroups}
              groupRenderer={this.groupRenderer}
              items={items}
              itemRenderer={this.itemRenderer}
              defaultTimeStart={moment().startOf('day')} //add(-1, 'days')}
              defaultTimeEnd={moment().add(4, 'days').endOf('day')} 
              horizontalLineClassNamesForGroup={group =>
                group.root==true ? ["highlight"] : ""
              }
              canMove={true}
              canResize={"right"}    
              onItemMove={this.handleItemMove}
              onItemResize={this.handleItemResize}  
              onItemClick={this.handleItemClick}  
              >
              <TimelineHeaders className="sticky">
              <SidebarHeader>
                {({ getRootProps }) => {
                  return <div {...getRootProps()}>Building Name/ Rooms</div>;
                }}
              </SidebarHeader>
              <DateHeader unit="primaryHeader" />
              <DateHeader />
            </TimelineHeaders>
          </Timeline>
    
          </CardBody>
        </Card>
      );
    
}
}
